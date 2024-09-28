# Use the official Bun image
FROM oven/bun:latest AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the package files first to install dependencies
COPY package.json bun.lockb ./

# Install dependencies using Bun
RUN bun install

# Check APP_ENV to decide if we need to install serve and build
ENV APP_ENV=development

# Copy the remaining project files into the container
COPY . .
RUN if [ "$APP_ENV" = "production" ]; then bun add serve; bun run build; fi

# Use an entrypoint script to determine which command to run
ENTRYPOINT ["sh", "-c"]

# Expose the port your app will run on
EXPOSE 3000

# Run the dev server or serve the production build based on APP_ENV
CMD ["if [ \"$APP_ENV\" = \"production\" ]; then bun run preview-build; else bun run dev; fi"]