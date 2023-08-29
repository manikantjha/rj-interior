// import "animate.css/animate.min.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "react-toastify/dist/ReactToastify.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { queryClientStaleTime } from "@/utils/utils";

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
    </QueryClientProvider>
  );
}
