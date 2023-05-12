import { sql } from "@vercel/postgres";
import useSWR from "swr";
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from "axios";

// const fetcher = async (...args: any[]) => fetch(...args).then((res) => res.json());
const fetcher = async (arg: any, ...args: any[]) => fetch(arg, ...args).then((res) => res.json());

type User = {
    id: number;
    nama: string;
}

const User: NextPage = () => {
    const r = useSWR('/api/user', fetcher);
    if (r.error) return <div>Failed to load</div>;
    if (!r.data) return <div>Loading...</div>;
    return (
        <div className={styles.container}>
            {(r.data as User[]).map((user) => (
                <div key={user.id}>
                    <h1>{user.nama}</h1>
                </div>
            ))}
        </div>
    )
}

export default User
