import axios, { AxiosResponse } from "axios";
import useSWR from "swr";
import { getCookie } from "cookies-next";
import { LoginForm } from "../components/SignModal";

export const TitleId = "393FD";

type Register = {
  username: string;
  email: string;
  password: string;
}

type LoginInstance = {
  EntityToken: { EntityToken: string; TokenExpiration: string, Entity: { Id: string } }
  LastLoginTime: string;
  NewlyCreated: boolean;
  PlayFabId: string;
  SessionTicket: string;
}

export default function useClient() {
  return {
    register: async (data: Register) => {
      const dataRegister = await axios.post(
        `https://${TitleId}.playfabapi.com/Client/RegisterPlayFabUser`,
        { ...data, "TitleId": TitleId }
      );
      await axios.post(
        `https://${TitleId}.playfabapi.com/Client/UpdateUserTitleDisplayName`,
        {
          displayName: dataRegister.data.data.Username
        },
        {
          headers: {
            "X-Authorization": dataRegister.data.data.SessionTicket
          }
        }
      );
      return dataRegister.data as AxiosResponse<LoginInstance, any>;
    },
    login: async (data: LoginForm) => {
      const dataLogin = await axios.post(
        `https://${TitleId}.playfabapi.com/Client/LoginWithPlayFab`,
        { ...data, "TitleId": TitleId }
      );
      return dataLogin.data as AxiosResponse<LoginInstance, any>;
    },
    validateEntityToken: () => {
      const EntityToken = getCookie("EntityToken");
      // eslint-disable-next-line react-hooks/rules-of-hooks
      return useSWR(["validate", EntityToken], async () => {
        try {
          const entityData = await axios.post(
            `https://${TitleId}.playfabapi.com/Authentication/ValidateEntityToken`,
            { EntityToken: EntityToken || "" },
            {
              headers: {
                "X-EntityToken": EntityToken || "",
              },
            }
          );
          return entityData.data;
        } catch (error) {
          // @ts-ignore
          return error.response;
        }
      }, { revalidateOnReconnect: true, revalidateOnFocus: true, revalidateOnMount: true, refreshWhenOffline: true, refreshInterval: 1000, refreshWhenHidden: true });
    },
    getEntityToken: async () => {
      const dataLogin = await axios.post(
        `https://${TitleId}.playfabapi.com/Authentication/GetEntityToken`,
        {},
        {
          headers: {
            "X-SecretKey": "OYXXE6SJIFJYS9O8ZU8BWF1RYEC545FNBDRGS6FMNJJQWIGKPA",
          }
        }
      );
      return dataLogin.data as AxiosResponse<any>;
    },
    getUserData: () => {
      const SessionTicket = getCookie("SessionTicket") || "";
      const PlayFabId = getCookie("PlayFabId") || "";
      // eslint-disable-next-line react-hooks/rules-of-hooks
      return useSWR(["getData", SessionTicket, PlayFabId], async () => {
        const dataLogin = await axios.post(
          `https://${TitleId}.playfabapi.com/Client/GetUserData`,
          {},
          {
            headers: {
              "X-Authorization": SessionTicket
            }
          }
        );
        const accountInfo = await axios.post(
          `https://${TitleId}.playfabapi.com/Client/GetAccountInfo`,
          {
            PlayFabId: PlayFabId
          },
          {
            headers: {
              "X-Authorization": SessionTicket
            }
          }
        );
        return { dataLogin: dataLogin.data?.data?.Data, accountInfo: accountInfo.data?.data?.AccountInfo };
      }, { revalidateOnReconnect: true, revalidateOnFocus: true, revalidateOnMount: true, refreshWhenOffline: true, refreshInterval: 1000, refreshWhenHidden: true })
    },
    updatePlayerData: async (data: any, SessionTicket: string) => {
      await axios.post(
        `https://${TitleId}.playfabapi.com/Client/UpdateUserData`,
        data,
        {
          headers: {
            "X-Authorization": SessionTicket
          }
        }
      );
    }
  }
}