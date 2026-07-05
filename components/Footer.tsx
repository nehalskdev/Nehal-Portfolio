export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 h-10 w-full bg-primary py-px text-center text-white">
      <p>&copy; {year} Nehal Shaikh. All rights reserved.</p>
    </footer>
  );
}
