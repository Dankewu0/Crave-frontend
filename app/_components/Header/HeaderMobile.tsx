import SearchBar from "./SearchBar";

export default function HeaderMobile() {
  return (
    <div className="flex flex-col">
      <div>Crave</div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
}
