import { IChatTemplateData } from "./data";
import explain from '@/assets/explain.svg'
import edit from '@/assets/edit-2.svg'
import translate from '@/assets/translate.svg'

const templateData: IChatTemplateData[] = [
    {
        segmentImage: explain,
        segmentTitle: 'Explain',
        templates: [
            { title: 'Explain Quantum physics' },
            { title: 'What are wormholes explain like i am 5' }
        ]
    },
    {
        segmentImage: edit,
        segmentTitle: 'Write & Edit',
        templates: [
            { title: 'Write a tweet about global warming' },
            { title: 'Write a poem about flower and love' },
            { title: 'Write a rap song lyrics about' }
        ]
    },
    {
        segmentImage: translate,
        segmentTitle: 'Translate',
        templates: [
            { title: 'How do you say “how are you” in korean?' },
            { title: 'Write a poem about flower and love' }
        ]
    },
]

export {
    templateData
}