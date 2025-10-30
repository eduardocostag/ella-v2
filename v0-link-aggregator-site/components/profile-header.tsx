import { Flame } from "lucide-react"

export function ProfileHeader() {
  return (
    <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
      <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center border-4 border-primary/20">
        <Flame className="h-10 w-10 sm:h-12 sm:w-12 text-white" fill="currentColor" />
      </div>

      <div className="space-y-1.5 sm:space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-balance">Ella</h1>
        <p className="text-sm sm:text-base text-muted-foreground text-pretty max-w-md px-2">all my links</p>
      </div>
    </div>
  )
}
