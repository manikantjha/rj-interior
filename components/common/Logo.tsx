/* eslint-disable @next/next/no-img-element */

export default function Logo() {
  return (
    <div className="flex items-center w-full">
      <img
        src="/assets/logo.svg"
        className="md:h-12 mr-3 h-10"
        alt="Flowbite Logo"
      />
      <h1 className="text-xl font-bold mt-2 flex-shrink-0">RJ Interior</h1>
    </div>
  );
}
