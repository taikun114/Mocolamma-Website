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
    title: "Image Generation Tab - Mocolamma",
    description: "Here’s how to use image models on an Ollama server to generate images using Mocolamma.",
    excludePageFromSearch: false,
    language: "en-us",
    socialImageAssetName: "Mocolamma_Social_v4bPMu4TakXy-hXjX6vsW.png",
    socialImageUrl: undefined,
    status: undefined,
    redirect: "",
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
    