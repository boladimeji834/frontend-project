import ChatAtom from "./chat-atom"
import { templateData } from "@/data/chat-templates"
import Image from "next/image"
import 'typeface-nunito'
import { IChatTemplate } from "@/data/data"

export default function ChatTemplate() {
  return (
    <div className="flex flex-col text-grey px-6 pt-6 pb-24 gap-9" style={{
      height: 'fit-content'
    }}>
      {
        templateData.map((each) => {
          return (
            <div 
              className="flex w-full flex-col items-center gap-5" 
              key={ each.segmentTitle }
            > 
              <div className="flex flex-col items-center gap-1.5">
                <Image alt={each.segmentTitle} src={each.segmentImage} />
                <p className="text-base font-bold text-grey-text" style={{ 
                  lineHeight: 'normal', 
                  fontFamily: 'nunito'
                  }}
                > 
                  { each.segmentTitle } 
                </p>
              </div>

              <div className="flex w-full gap-2.5 flex-col">
                { each.templates.map((e: IChatTemplate) => { 
                  return (
                    <ChatAtom key={e.title} text={e.title} />
                    )
                  }
                )}
              </div>
            </div>
          )
        })
      }
      <div>
        
      </div>
      
    </div>
  )
}
