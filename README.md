# Image Gallery

A simple Angular 17+ application that displays an image gallery using components. This project was developed as part of a frontend specialization exercise focused on component creation, integration, styling, and Git workflow.



## Features

• Standalone Angular components (Gallery and ImageItem)
• Component integration using selectors (<app-gallery>)
• Data passing through @Input() signals
• List rendering using Angular’s @for block
• Highlighting the first image dynamically
• Git workflow with feature branching and merging



## Project Structure

src/app/
│
├── app.ts              # Root component
├── app.html            # Renders <app-gallery>
│
├── gallery/
│   ├── gallery.ts      # Standalone Gallery component
│   ├── gallery.html    # Renders list of images using @for
│   └── gallery.css     # Grid layout styles
│
└── image-item/
    ├── image-item.ts   # Standalone ImageItem component
    ├── image-item.html # Displays a single image
    └── image-item.css  # Image sizing + featured border



## Development Server

1. Start the development server: ng serve
2. Open your browser at: http://localhost:4200/
3. The app reloads automatically when you modify source files.



## How the Gallery Works

• Gallery Component
• Contains an array of image objects
• Iterates using Angular’s @for block
• Passes each image to the ImageItem component
• Marks the first image as featured (isFeatured = true)
• ImageItem Component
• Receives image and isFeatured via @Input() signals
• Displays the image with basic styling
• Applies a special border when featured
• App Component
• Imports the Gallery component
• Renders it using: <app-gallery></app-gallery>



## Git Workflow

1. Create feature branch: feature/basic-gallery
2. Implement Gallery + ImageItem components
3. Commit changes
4. Switch to main
5. Merge feature branch
6. Resolve conflicts if needed and push
