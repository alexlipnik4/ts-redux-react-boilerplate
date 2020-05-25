
export interface ILoginProps {
    message: string | null,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    onChange: (e: React.FormEvent<HTMLInputElement>) => void,
}