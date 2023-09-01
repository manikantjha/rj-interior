// import "animate.css/animate.min.css";
import MoveToTopButton from "@/components/common/MoveToTopButton";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import "@/styles/globals.css";
import { queryClientStaleTime } from "@/utils/utils";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
      refetchOnReconnect: false,
      retry: 3,
      staleTime: queryClientStaleTime,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <MoveToTopButton />
    </QueryClientProvider>
  );
}
