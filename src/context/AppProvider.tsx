import { createContext, ReactNode, useState } from "react";

const AppContext = createContext({ number: 0 });

interface Props {
	children: ReactNode;
}

const AppProvider = ({ children }: Props) => {
	const [number, setNumber] = useState<number>(0);

	return (
		<AppContext.Provider
			value={{
				number,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export { AppProvider, AppContext };
