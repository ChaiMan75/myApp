# Soles & Souls Initiative Website

A modern, responsive website for the Soles & Souls wellness and social responsibility initiative.

## Features

- **Modern UI**: Sleek design with contemporary UI elements
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dynamic Content**: Events, impact statistics, and gallery images loaded from database
- **Interactive Components**: Newsletter signup, contact form, and volunteer registration
- **PostgreSQL Database**: Persistent data storage for all content

## Technology Stack

- **Frontend**: React with TypeScript, Vite, TailwindCSS, Shadcn UI components
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: TailwindCSS with custom theme
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v16+)
- PostgreSQL database

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/soles-and-souls.git
   cd soles-and-souls
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file with the following variables:
   ```
   DATABASE_URL=your_postgresql_connection_string
   ```

4. Initialize the database:
   ```
   npm run db:push
   ```

5. Start the development server:
   ```
   npm run dev
   ```

## Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the main branch, using GitHub Actions.

## License

This project is licensed under the MIT License - see the LICENSE file for details.