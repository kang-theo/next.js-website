import Image from "next/image"

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-2 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/profile-photo-512x512.png"
        width={200}
        height={200}
        alt="Theo Kang"
        priority={true} // load immediately
      />
    </section>
  )
}