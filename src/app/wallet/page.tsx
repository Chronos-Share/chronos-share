import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Wallet from "@/app/components/wallet";

const Page: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <Navbar />
      <h1 className="mx-auto text-2xl">Wallet Info</h1>
      <Wallet />
      <Footer className="fixed bottom-0 left-0 w-full" />
    </div>
  );
};
export default Page;
