function Tab() {
  return (
    <>
      <svg width="0" height="0">
        <defs>
          <clipPath id="responsiveClip" clipPathUnits="objectBoundingBox">
            {/* Scaled path data (original coordinates divided by 278 and 57) */}
            <path d="M0.00146,0.221 C-0.00471,0.1096 0.0125,0 0.0362,0 H0.964 C0.9875,0 1.0047,0.1096 0.998,0.221 L0.962,0.8703 C0.958,0.946 0.944,1 0.928,1 H0.0721 C0.0559,1 0.0416,0.946 0.0374,0.8703 L0.00146,0.221 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Your div with dynamic sizing */}
      <div className="flex h-[50px] w-[300px] items-center justify-center bg-[#312f4e] py-[2px] [clip-path:url(#responsiveClip)]">
        <div className="flex h-[98%] w-[98%] items-center justify-center overflow-hidden bg-[#201F36] [clip-path:url(#responsiveClip)]">
          <div className="flex h-full w-full items-center justify-between">
            <div className="flex h-[100%] w-1/2 items-center justify-center rounded-lg from-[#FF00B2] to-[#D900FF] text-white transition-colors hover:bg-gradient-to-b hover:shadow-[0_0_0_1px_#ED01D8,inset_0_2px_2px_0_#ffffff70]">
              <p>My Codes</p>
            </div>
            <div className="flex h-[120px] w-1/2 items-center justify-center">
              <p>My Codes</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tab;
