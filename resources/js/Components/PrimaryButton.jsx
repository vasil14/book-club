export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-teal-400 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white hover:border-teal-400 hover:bg-white hover:text-teal-400 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
