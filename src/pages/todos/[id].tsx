import { useRouter } from 'next/router';

export default function TodoDetails() {
    const router = useRouter();
    const { id } = router.query;

    return <h1>Details for To-Do {id}</h1>;
}