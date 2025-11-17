# ProStore - Modern E-Commerce Platform

ProStore is a comprehensive, production-ready e-commerce platform built with cutting-edge web technologies. This full-featured online store includes user authentication, product management, shopping cart functionality, secure payments, order management, and an admin dashboard.

## 🛒 Key Features

- **Complete E-Commerce Functionality**: Product catalog, shopping cart, checkout process, order tracking
- **User Management**: Secure authentication, user profiles, order history
- **Admin Dashboard**: Product management, order management, user administration, analytics
- **Payment Processing**: Multiple payment methods (PayPal, Stripe)
- **Email System**: Order confirmations, purchase receipts
- **Review System**: Product reviews and ratings
- **Responsive Design**: Mobile-first, fully responsive UI
- **Search & Filtering**: Advanced product search and category filtering

## 🚀 Technology Stack

### **Frontend Framework & Language**
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Latest React with server components
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript

### **Styling & UI**
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI primitives
- **[Lucide React](https://lucide.dev/)** - Modern icon library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Dark/light theme support
- **[Embla Carousel](https://www.embla-carousel.com/)** - Smooth carousel component
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications

### **Database & ORM**
- **[PostgreSQL](https://www.postgresql.org/)** - Robust relational database
- **[Neon Database](https://neon.tech/)** - Serverless PostgreSQL platform
- **[Prisma ORM](https://www.prisma.io/)** - Type-safe database toolkit
- **Database Features**: UUID primary keys, complex relations, JSON fields, timestamps

### **Authentication & Security**
- **[NextAuth.js 5](https://next-auth.js.org/)** - Complete authentication solution
- **[bcrypt-ts-edge](https://www.npmjs.com/package/bcrypt-ts-edge)** - Password hashing
- **Role-based access control** (User, Admin)
- **Session management** and secure cookies

### **Payment Processing**
- **[Stripe](https://stripe.com/)** - Credit card and digital wallet payments
- **[PayPal](https://www.paypal.com/)** - PayPal and PayPal Credit integration
- **Secure payment handling** with webhooks

### **File Management**
- **[UploadThing](https://uploadthing.com/)** - File upload service
- **Image optimization** and storage

### **Email Service**
- **[Resend](https://resend.com/)** - Modern email API
- **[React Email](https://react.email/)** - Beautiful email templates
- **Transactional emails**: Order confirmations, receipts

### **Form Handling & Validation**
- **[React Hook Form](https://react-hook-form.com/)** - Performant form library
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Form validation integration

### **State Management & Data Fetching**
- **Server Actions** - Next.js server-side data mutations
- **Server Components** - Zero-bundle-size React components
- **Optimistic updates** and real-time UI

### **Development Tools**
- **[ESLint 9](https://eslint.org/)** - Code linting and formatting
- **[Jest](https://jestjs.io/)** - Testing framework
- **[ts-jest](https://kulshekhar.github.io/ts-jest/)** - TypeScript Jest transformer

### **Utilities & Helpers**
- **[clsx](https://github.com/lukeed/clsx)** - Conditional className utility
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Tailwind class merging
- **[slugify](https://github.com/simov/slugify)** - URL-friendly string conversion
- **[query-string](https://github.com/sindresorhus/query-string)** - URL query string utilities
- **[recharts](https://recharts.org/)** - Data visualization charts

## 🏗️ Project Architecture

### **Database Schema**
- **Products**: Comprehensive product catalog with categories, images, pricing
- **Users**: User profiles with addresses and payment preferences  
- **Orders**: Complete order management with items and status tracking
- **Cart**: Persistent shopping cart (user-based and session-based)
- **Reviews**: Product review and rating system
- **Authentication**: Secure user authentication with multiple providers

### **API Structure**
- **RESTful API routes** for all business logic
- **Server Actions** for form submissions and data mutations
- **Webhook handlers** for payment processing
- **Type-safe API** with TypeScript interfaces

### **Security Features**
- **CSRF protection** with Next.js built-in security
- **SQL injection prevention** with Prisma ORM
- **Input validation** with Zod schemas
- **Secure password hashing** with bcrypt
- **Environment variable protection**

## 💼 Business Value

This e-commerce platform represents a **production-ready solution** with enterprise-level features:

- **Scalable Architecture**: Built for growth with modern serverless technologies
- **SEO Optimized**: Server-side rendering for better search engine visibility  
- **Performance**: Optimized images, fonts, and code splitting
- **Accessibility**: WCAG compliant UI components
- **Mobile Ready**: Responsive design for all device sizes
- **Maintainable**: Clean code structure with TypeScript and modern patterns
- **Cost Effective**: Serverless deployment reduces infrastructure costs

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   # Add your database URL, authentication secrets, and API keys
   ```

3. **Set up the database:**
   ```bash
   npx prisma generate
   npx prisma db push
   npx prisma db seed
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📧 Email Development

Test email templates during development:
```bash
npm run email
```

## 🧪 Testing

Run the test suite:
```bash
npm test          # Run once
npm run test:watch # Watch mode
```

## 🚀 Deployment

This application is optimized for deployment on:
- **[Vercel](https://vercel.com/)** - Recommended (built by Next.js creators)
- **[Netlify](https://netlify.com/)**
- **[Railway](https://railway.app/)**
- **Any Node.js hosting provider**

The codebase follows modern deployment best practices with environment-based configuration and serverless-ready architecture.
