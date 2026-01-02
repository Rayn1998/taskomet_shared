export default interface IArtist {
    id: number;
    name: string;
    user_name: string;
    email: string;
    password: string;
    tg_id?: string;
    role: number;
    photo_url?: string;
}
