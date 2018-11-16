<template>
    <b-nav class="h-100" vertical>
        <b-nav-item to="/" exact>
          <font-awesome-icon icon="home" /> <span>Dashboard</span>
        </b-nav-item>
        <b-nav-item to="/vm">
          <font-awesome-icon icon="desktop" /> <span>Virtual Machines</span>
        </b-nav-item>
    </b-nav>
</template>

<style lang="scss" scoped>
    $border-color: #ccc;
    $bg-color: #F5F5F5;

    $item-color: #878787;
    $item-bg-color: #F5F5F5;
    $item-hover-color: $item-color;
    $item-hover-bg-color: #EBEBEB;

    $active-bg-color: #DCDCDC;
    $active-color: #333;
    $active-icon-color: #900;

    /** Whole left nav */
    .nav {
        width: 200px;
        font-size: .8rem;
        border-right: 1px solid $border-color;
        background-color: $bg-color;
    }

    /* Non group/collapsible items */
    .nav-item {
        cursor: pointer;
        background-color: $item-bg-color;
        border-bottom: 1px solid $border-color;
    }

        .nav-item:hover {
            background-color: $item-hover-bg-color;
        }

    .nav-link {
        color: $item-color;
    }

        .nav-link:hover {
            color: $item-hover-color;
        }

        .nav-link.active {
            font-weight: bold;
            background-color: $active-bg-color;
            color: $active-color;
        }

    a.nav-link.active svg {
        color: $active-icon-color;
    }

    /* Group/collapsible */
    .navbar-text {
        width: 100%;
        cursor: pointer;
        color: $item-color;
        border-bottom: 1px solid $border-color;
    }
</style>