export default function Footer() {
    return (
        <footer className="border-t border-zinc-200 py-6 md:py-8">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row text-zinc-500">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Todo App. All rights reserved.
                </p>
            </div>
        </footer>
    );
}