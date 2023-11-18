import { StaticImageData } from "next/image"

interface IChatTemplate {
    title: string
}

export interface IChatTemplateData {
    segmentImage: StaticImageData,
    segmentTitle: string,
    templates: IChatTemplate[]
}

export interface IChatComponentProp {
    text: string
}

export interface IChatObject {
    chatCategory: 1 | 2,
    content: string
}

export interface IChat {
    conversationInitiated: boolean
    chat: IChatObject[]
    screenLevel: number
}

export interface IState {
    chat: IChat
}