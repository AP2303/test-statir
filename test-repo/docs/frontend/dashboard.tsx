/* ---
title: Dashboard TSX
description: TSX rendering test
layout: code
language: tsx
--- */

type User = {
id: number;
name: string;
};

export default function Dashboard() {
const users: User[] = [
{ id: 1, name: "John" }
];

return ( <div> <h1>Dashboard</h1> </div>
);
}
