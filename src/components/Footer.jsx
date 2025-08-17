export default function Footer() {
  const year = new Date().getFullYear()
  return <footer className="bg-white border-t py-4 text-center text-gray-500 text-sm">
  © {new Date().getFullYear()} Yared Yohannes Fesshaye. All rights reserved.
</footer>

}


