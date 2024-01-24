export default function LoadingPage() {
        return (
                <div className="flex items-center justify-center h-screen bg-gray-800 text-white">
                        <div className="flex flex-col items-center">
                                <div className="loader mb-4"></div>
                                <span className="text-sm font-mono">Loading...</span>
                        </div>

                        <style jsx>{`
                        .loader {
                            border-top-color: #3498db;
                            -webkit-animation: spinner 1.5s linear infinite;
                            animation: spinner 1.5s linear infinite;
                            border-right-color: transparent;
                            border-bottom-color: transparent;
                            border-left-color: transparent;
                            border-style: solid;
                            border-width: 4px;
                            border-radius: 50%;
                            height: 40px;
                            width: 40px;
                        }
                        @-webkit-keyframes spinner {
                            0% { -webkit-transform: rotate(0deg); }
                            100% { -webkit-transform: rotate(360deg); }
                        }
                        @keyframes spinner {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                    `}</style>
                </div>
        );
};