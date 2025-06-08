import LogoIcon from "@/components/icons/LogoIcon";

export const Logo = () => {
  return (
    // Exterior Div - Container Badge
    <div
      className="
      antialiased flex items-center relative h-8 w-8 bg-black/80
      backdrop-blur-[48px] rounded-full select-none cursor-pointer scale-100
      overflow-hidden transition-[scale,width,box-shadow,background]duration-300
      will-change-[scale,box-shadow,width,background]
      shadow-[0_0_0_1px_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(255,255,255,0.05),0px_16px_32px_-8px_rgba(0,0,0,0.24)]
      "
      data-next-badge="true"
      data-error="false"
    >
      {/* Intermediate div */}
      <div>
        {/* Inner button */}
        <button
          className="
          w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 
          hover:bg-white/[0.13] focus:outline-none focus:ring-2 focus:ring-white/20
          border-none bg-transparent ml-0.5
          "
          data-next-mark="true"
          aria-label="Logo"
        >
          <LogoIcon width={16} className="transition-colors duration-300" />
        </button>
      </div>
    </div>
  );
};
