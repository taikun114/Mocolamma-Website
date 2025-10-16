/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  const _data = new Map<string, ResourceRequest>([
  ])
  const _action = new Map<string, ResourceRequest>([
  ])
  return { data: _data, action: _action }
}


      export const getPageMeta = ({
  system,
  resources,
}: {
  system: System;
  resources: Record<string, any>;
}): PageMeta => {
  return {
    title: "サーバータブ - Mocolamma",
    description: "MocolammaにOllamaサーバーを追加したり、選択されているサーバーを切り替えたり、サーバーの詳細情報を確認したりする方法をご紹介します。",
    excludePageFromSearch: false,
    language: "ja-jp",
    socialImageAssetName: "Mocolamma_Social-ja_BkB_2QEqAgmUES7k42Gt7.webp",
    socialImageUrl: undefined,
    status: undefined,
    redirect: undefined,
    custom: [
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params
}


      export const contactEmail = "contact.taikun@gmail.com";
    