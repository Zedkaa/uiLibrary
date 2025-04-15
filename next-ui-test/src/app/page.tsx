import Button from "ui-lib/src/components/Button/Button";
import "../../node_modules/ui-lib/src/index.css";
import "./globals.css";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button
        variant={"secondary"}
        size={"medium"}
        children={"hi from btn"}
        disabled={false}
        loading={false}
      />
    </div>
  );
}
