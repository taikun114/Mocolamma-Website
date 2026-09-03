/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System; resources?: Record<string, any> }) => {
  const _data = new Map<string, ResourceRequest>([
  ])
  const _contentData = new Map<string, ResourceRequest>()
  const _action = new Map<string, ResourceRequest>([
  ])
  return { data: _data, action: _action, contentData: _contentData }
}


      export const getPageMeta = ({
  system,
  resources,
}: {
  system: System;
  resources: Record<string, any>;
}): PageMeta => {
  return {
    title: "画像生成タブ - Mocolamma",
    description: "MocolammaでOllamaサーバー上にある画像モデルを使って画像生成を行う方法をご紹介します。",
    excludePageFromSearch: false,
    language: "ja-jp",
    socialImageAssetName: "Mocolamma_Social-ja_wQt7_oQuO0KpseiK9VDWM.png",
    socialImageUrl: undefined,
    status: undefined,
    redirect: undefined,
    content: undefined,
    custom: [
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params
}


      export const contactEmail = "hello@webstudio.is";
    