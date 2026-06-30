"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  Download,
  Mail,
  ArrowDown,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { personal } from "../../data/personal";

export default function Hero() {

return (

<section
className="
relative
min-h-screen
flex
items-center
overflow-hidden
"
>

{/* Background */}

<div
className="
absolute
left-1/2
top-0
h-[600px]
w-[600px]
-translate-x-1/2
rounded-full
bg-blue-600/20
blur-[150px]
"
/>

<div
className="
mx-auto
grid
max-w-7xl
grid-cols-1
items-center
gap-20
px-6
lg:grid-cols-2
"
>

{/* Left */}

<motion.div

initial={{opacity:0,x:-50}}

animate={{opacity:1,x:0}}

transition={{duration:.8}}

>

{personal.available && (

<div
className="
mb-6
inline-flex
items-center
gap-2
rounded-full
border
border-green-500/30
bg-green-500/10
px-4
py-2
text-sm
"
>

<div className="h-2 w-2 rounded-full bg-green-500"/>

Available for Internship

</div>

)}

<h1
className="
text-6xl
font-black
leading-tight
lg:text-7xl
"
>

Hi,

I'm

<span className="text-blue-500">

{" "}

{personal.name}

</span>

</h1>

<p
className="
mt-6
text-xl
text-zinc-500
"
>

{personal.subtitle}

</p>

<div className="mt-10 flex flex-wrap gap-4">

<Link

href={personal.resume}

target="_blank"

className="
rounded-xl
bg-blue-600
px-6
py-3
font-semibold
text-white
transition
hover:scale-105
"

>

<span className="flex items-center gap-2">

<Download size={18}/>

Resume

</span>

</Link>

<Link

href={personal.github}

target="_blank"

className="
rounded-xl
border
px-6
py-3
transition
hover:bg-white/5
"

>

<span className="flex items-center gap-2">

<FaGithub size={18}/>

GitHub

</span>

</Link>

<Link

href={personal.linkedin}

target="_blank"

className="
rounded-xl
border
px-6
py-3
transition
hover:bg-white/5
"

>

<span className="flex items-center gap-2">

<FaLinkedin size={18}/>

LinkedIn

</span>

</Link>

</div>

<div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">

<div>

<h2 className="text-3xl font-bold">

{personal.stats.projects}

</h2>

<p className="text-zinc-500">

Projects

</p>

</div>

<div>

<h2 className="text-3xl font-bold">

{personal.stats.technologies}

</h2>

<p className="text-zinc-500">

Technologies

</p>

</div>

<div>

<h2 className="text-3xl font-bold">

{personal.stats.experience}

</h2>

<p className="text-zinc-500">

Years

</p>

</div>

<div>

<h2 className="text-3xl font-bold">

100%

</h2>

<p className="text-zinc-500">

Passion

</p>

</div>

</div>

</motion.div>

{/* Right */}

<motion.div

initial={{opacity:0,x:50}}

animate={{opacity:1,x:0}}

transition={{duration:.8}}

className="flex justify-center"

>

<div
className="
relative
h-[420px]
w-[420px]
overflow-hidden
rounded-full
border-4
border-blue-500/20
shadow-2xl
"
>

<Image

src="/images/profile.webp"

alt="Safar Ahmed"

fill

priority

className="object-cover"

/>

</div>

</motion.div>

</div>

<div
className="
absolute
bottom-8
left-1/2
-translate-x-1/2
animate-bounce
"
>

<ArrowDown/>

</div>

</section>

);

}