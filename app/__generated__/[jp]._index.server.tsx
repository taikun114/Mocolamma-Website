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
    title: "Mocolamma - Ollamaマネージャーアプリ",
    description: "サーバー管理、モデル管理、チャット、画像生成機能を備えた、macOS、iOS、iPadOS、visionOSで使えるOllamaマネージャーアプリ",
    excludePageFromSearch: false,
    language: "ja-jp",
    socialImageAssetName: "Mocolamma_Social-ja_QpI2fCrEEN2bz-s3I0z9l.png",
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


      export const contactEmail = undefined;
    