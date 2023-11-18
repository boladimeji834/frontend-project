import { StaticImageData } from "next/image"

interface IChatTemplate {
    title: string
}

export interface IChatTemplateData {
    segmentImage: StaticImageData,
    segmentTitle: string,
    templates: IChatTemplate[]
}