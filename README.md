## Hello World 

A Hello World [DevBoard](https://devboard.gitsense.com) package containing simple [widgets](https://devboard.gitsense.com?board=welcome.widgets) and [boards](https://devboard.gitsense.com?board=welcome.boards) to help you get up to speed quickly.

### Widgets

- [frontend-only](https://github.com/gitsense/hello-world/tree/main/widgets/frontend-only)
- [backend-only](https://github.com/gitsense/hello-world/tree/main/widgets/backend-only)
- [fullstack](https://github.com/gitsense/hello-world/tree/main/widgets/fullstack)

### Boards

- [board-1](https://github.com/gitsense/hello-world/tree/main/boards/board-1.json)
- [board-2](https://github.com/gitsense/hello-world/tree/main/boards/board-2.json)

### DevBoard Dependencies

None

### NPM Dependencies

None

### Install

    cd <devboard installation directory>/packages
    git clone https://github.com/gitsense/hello-world hello-world

### Build and bundle

    cd <devboard installation directory>
    npm run build:widgets && npm run build:boards && npm run bundle
