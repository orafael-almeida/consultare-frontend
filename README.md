
<div align="center">
  <br />
    <a href="#" target="_blank">
      <img src="https://raw.githubusercontent.com/orafael-almeida/consultare-system-frontend/refs/heads/main/public/assets/images/consultare-readme.png
      " alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=next.js&color=black" alt="Next;js" />
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="React.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="TailwindCSS" />
    <img src="https://img.shields.io/badge/Appwrite-F02E65?style=for-the-badge&logo=Appwrite&logoColor=black" alt="Appwrite" />
    <img src="https://img.shields.io/badge/react--hook--form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white" alt="React Hook Form" />
  </div>
<br/><br/></br>
 
  <h1 align="center">Consultare - Appointment System</h1>

   <div align="center">
     Appointment scheduling management system, allowing users to register, consult and manage their appointments in a simple and efficient way.
    </div>
</div>

## 📋 <a name="table">Sumary</a>

1. 🚀 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 💻 [Quick Start](#quick-start)
5. 💾 [Environment Variables](#envs)
6. 🤝 [Contributing](#contributing)
7. 👥 [Authors](#authors)


## <a name="introduction">🚀 Introduction</a>

This project is an appointment management system designed to simplify the process of scheduling and managing medical appointments. The application was built using Next.js and React on the frontend, styled with TailwindCSS for a modern and responsive interface. The backend is managed by Appwrite, ensuring efficient and secure integration for authentication and data storage. Input validations are performed with Zod, ensuring consistency and data integrity across the entire system.

❗The live demo website is configurate with temporary environment variables:
Admin OTP: 123456

## <a name="tech-stack">⚙️ Tech Stack</a>

- React.js
- Next.js
- Tailwind CSS
- Node Appwrite
- Zod
- React Hook Form


## <a name="features">🔋 Features</a>

- **Fully Responsive Design**: Perfect adaptation to all devices, ensuring a consistent experience on desktops, tablets and smartphones.

- **Secure Authentication with NextAuth**: Robust authentication system, supporting login, registration and password recovery with integration with Appwrite for secure user management.

- **Dynamic Appointment Scheduling**: Flexible appointment scheduling with real-time checks for availability and time conflicts.

- **Robust Validations with Zod**: Efficient validation of user and appointment data, ensuring consistency and security in each interaction.

- **Database Management with Appwrite**: Reliable data persistence to store patient, doctor and appointment information in an organized and secure way.

- **Admin Panel**: Administrative area to manage users, doctors and general system settings efficiently.

- **Accessibility and SEO Optimized**: Application optimized to improve accessibility and visibility in search engines, ensuring an inclusive and high-performance experience.


## <a name="quick-start">💻 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**00 - Prerequisites**

To use this project you must have previously installed the following packages:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager or similar)

**01 - Cloning the Repository**

```bash
git clone https://github.com/orafael-almeida/consultare-system-frontend
cd consultare-system-frontend
```

**02 - Installation**

Install/Update the project dependencies using npm:

```bash
npm install
```

**03 - Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
Please, check the port and add the environments below.

## <a name="envs">💾 Environment Variables</a>

<details>
<summary><code>.env.local</code></summary>

```
#Add the ids of yours tables provided by Appwrite.

NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=

NEXT_PUBLIC_ADMIN_PASSKEY=

```

</details>


## <a name="contributing">🤝 Contributing</a>

Contributions, issues, and feature requests are welcome!

1. Fork it (<https://github.com/orafael-almeida/consultare-system-frontend/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## <a name="authors">👥 Authors</a>

<table style="border-collapse: collapse; table-layout: auto text-align: left;">

  <tbody>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;">
        <img src="https://avatars.githubusercontent.com/u/173099475?v=4" width="60" style="border-radius: 50%; display: block; margin: 0 auto;">
      </td>
      <td style="padding: 10px; border: 1px solid #ddd;">Rafael Almeida</td>
      <td style="padding: 10px; border: 1px solid #ddd;">
        <a href="https://www.linkedin.com/in/orafael-almeida/" target="_blank">LinkedIn</a> |
        <a href="https://github.com/orafael-almeida" target="_blank">GitHub</a>
      </td>
    </tr>
  </tbody>
</table>