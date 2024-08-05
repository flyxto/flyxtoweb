/**
* @see https://v0.dev/t/MQRmuVHEeCf
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Testimonial() {
  return (
    (<Card className="w-full max-w-md p-6 grid gap-4">
      <div className="flex items-start gap-4">
        <Avatar className="shrink-0">
          <AvatarImage src="https://media.licdn.com/dms/image/v2/D5603AQHiWPq2BkBCmw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1690898415992?e=1728518400&v=beta&t=UgT4UWjQieb0otgwutkwd76gbbgBb4gn0z_9_6Kod5o" alt="@shadcn" />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <div className="flex items-center gap-2">
            <h4 className="font-medium">Chamikara Senarathne</h4>
            <span className="text-muted-foreground text-sm">@MetaX</span>
            <span className="text-muted-foreground text-sm">· 2024</span>
          </div>
          <p className="">
            They created a wonderful web application with a dashboard to make things easier for us and provided an amazing service.
          </p>
        </div>
      </div>
      <div className="">
        <p className="text-right ">MD - MetaX Market (Pvt) Ltd.</p>
        <p className="text-right text-muted-foreground">Sri Lanka · China</p>

      </div>
    </Card>)
  );
}

function HeartIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>)
  );
}


function MessageCircleIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>)
  );
}


function RepeatIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </svg>)
  );
}


function ShareIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>)
  );
}
