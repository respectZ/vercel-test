import { sql } from "@vercel/postgres";
import useSWR from "swr";
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from "axios";

const fetcher = async (...args) => fetch(...args).then((res) => res.json());


const User: NextPage = () => {
    const { data, error } = useSWR('/api/user', fetcher);
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    return (
        <div className={styles.container}>
            {data.map((user) => (
                <div key={user.id}>
                    <h1>{user.nama}</h1>
                </div>
            ))}
        </div>
    )
}

export default User
