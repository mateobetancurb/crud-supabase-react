import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
	children?: ReactNode;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false,
	};

	public static getDerivedStateFromError(): State {
		return { hasError: true };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.error("Uncaught error:", error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			return (
				<div className="text-center text-white mt-12 ">
					<h1 className="mb-4">⚠️ Something went wrong</h1>
					<p>Environment variables were deleted temporarily by security</p>
				</div>
			);
		}

		return this.props.children;
	}
}

export { ErrorBoundary };
