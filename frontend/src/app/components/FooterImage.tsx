import Image from 'next/image';

export default function FooterImage() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-10">
      <Image
        src="/images/FooterImage.png"
        alt="Footer decoration"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        priority={false}
      />
    </div>
  );
}