import Link from "next/link";

function NavBarButtons({
  name,
  reference,
}: {
  name: string;
  reference: string;
}) {
  return (
    <li>
      <Link
        href={reference}
        className="block py-2 px-3 text-white"
        aria-current="page"
        style={{ fontSize: "1.5vh" }}
      >
        {name}
      </Link>
    </li>
  );
}
export default NavBarButtons;
