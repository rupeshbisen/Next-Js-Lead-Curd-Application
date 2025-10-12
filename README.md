# Next.js Lead Application

A modern lead management system built with Next.js, TypeScript, and MongoDB. This application allows you to efficiently manage leads with full CRUD operations, search functionality, and a responsive design.

**Created by:** [Rupesh Bisen](https://github.com/rupeshbisen)

## 🚀 Technologies Used

![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-8.5.2-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-8.5.2-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Joi](https://img.shields.io/badge/Joi-17.13.3-FF6B6B?style=for-the-badge)
![React Icons](https://img.shields.io/badge/React_Icons-5.2.1-E91E63?style=for-the-badge&logo=react&logoColor=white)
![React Toastify](https://img.shields.io/badge/React_Toastify-9.1.3-FF6B35?style=for-the-badge)

## ✨ Features

- **Lead Management**: Create, read, update, and delete leads
- **Search Functionality**: Real-time search through leads by name
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Form Validation**: Client-side validation with Joi
- **Toast Notifications**: User-friendly notifications for all actions
- **Loading States**: Smooth loading indicators for better UX
- **Modal Interface**: Clean modal-based forms for lead operations

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rupeshbisen/Next-Js-Lead-Curd-Application.git
   cd Next-Js-Lead-Curd-Application
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.sample .env.local
   ```
   Update the `.env.local` file with your MongoDB connection string and other required environment variables.

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
src/
├── app/
│   ├── api/lead/          # API routes for lead operations
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/
│   ├── formElements/      # Reusable form components
│   └── loader/            # Loading components
├── database/              # Database connection and configuration
├── models/                # MongoDB/Mongoose models
├── service/               # API service functions
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions and constants
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

We welcome contributions to the Next.js Lead Application! Here's how you can help:

### Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/rupeshbisen/Next-Js-Lead-Curd-Application.git
   ```
3. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Development Guidelines

- **Code Style**: Follow the existing code style and use ESLint
- **TypeScript**: Ensure all code is properly typed
- **Testing**: Add tests for new features (when applicable)
- **Documentation**: Update documentation for any new features

### Submitting Changes

1. **Commit your changes** with a clear message:
   ```bash
   git commit -m "Add: new feature description"
   ```
2. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
3. **Create a Pull Request** on GitHub with:
   - Clear description of changes
   - Screenshots (if UI changes)
   - Testing instructions

### Contribution Types

- 🐛 **Bug Fixes**: Report and fix bugs
- ✨ **New Features**: Add new functionality
- 📚 **Documentation**: Improve documentation
- 🎨 **UI/UX**: Enhance user interface and experience
- ⚡ **Performance**: Optimize application performance
- 🧹 **Code Quality**: Refactor and improve code quality

### Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Follow the project's coding standards

## 📝 API Endpoints

- `GET /api/lead` - Get all leads
- `POST /api/lead` - Create a new lead
- `PUT /api/lead` - Update an existing lead
- `DELETE /api/lead` - Delete a lead

## 🌟 Features in Development

- Advanced filtering options
- Export functionality
- Lead analytics dashboard
- Email integration
- Bulk operations

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [MongoDB](https://www.mongodb.com/) - The database for modern applications
- [Vercel](https://vercel.com/) - Platform for frontend frameworks and static sites

## 📞 Support

If you have any questions or need help, please:
1. Check the existing issues on GitHub
2. Create a new issue with detailed information
3. Contact the development team

## 👨‍💻 Author

**Rupesh Bisen**
- GitHub: [@rupeshbisen](https://github.com/rupeshbisen)
- Project Repository: [Next-Js-Lead-Curd-Application](https://github.com/rupeshbisen/Next-Js-Lead-Curd-Application)

## 🤝 How to Contribute

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/rupeshbisen/Next-Js-Lead-Curd-Application/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Give a ⭐️ if this project helped you!

---

Made with ❤️ by [Rupesh Bisen](https://github.com/rupeshbisen)
