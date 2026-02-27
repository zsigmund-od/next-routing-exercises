import Link from "next/link";

export default function ScreenSaverColorPicker() {
  return (
    <main>
      <h1>Pick a color for the screen saver</h1>
      <ul>
        <li>
          <Link href="/exercises/01-screensaver/crimson">Crimson</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/orchid">Orchid</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/teal">Teal</Link>
        </li>
      </ul>
    </main>
  );
}
