import image from "../assets/image.png";
import verified from "../assets/image copy 2.png";
export function ArtistHeader({ artist }) {
  return (
    <div className="relative w-full h-[452px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-[60%] h-[50%] mt-20 mx-20  bg-cover bg-center rounded-3xl object-fit"
        style={{
          backgroundImage: `url(${image})`,
        }}
        alt="Background"
      ></div>

      {/* Artist Image */}
      <div
        className="absolute w-[30%] h-[25p%] right-[36rem] top-[-1.9rem] bg-cover bg-center rounded-lg"
        style={{ backgroundImage: "url(.png)" }}
      >
        <img
          src={artist.imageurl}
          alt={artist.name}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20 rounded-lg" />
      </div>

      {/* Content */}
      <div className="relative w-full h-full flex flex-col top-[-11rem] left-32 justify-end p-6 text-white">
        {/* Verified Badge */}
        <div className="flex items-center gap-2 mb-2">
          <img src={verified} className="h-5 w-5" alt="" />
          {artist.verified && (
            <span className="bg-primary/20 text-primary px-2 py-1 rounded-full text-sm">
              Verified Artist
            </span>
          )}
        </div>

        {/* Artist Name */}
        <h1 className="text-4xl font-semibold mb-2">{artist.name}</h1>

        {/* Monthly Listeners */}
        <p className="text-sm text-muted-foreground mt-6">
          {artist.monthlyListeners} monthly listeners
        </p>

        {/* Additional Content (if any) */}
        {/* Add more elements like tracks, albums, etc. */}
      </div>
    </div>
  );
}
