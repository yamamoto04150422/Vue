

<template>
  <header>
    <h1>Pinia Sample</h1>
  </header>
  <br>
  <main>
    <RouterView/>
  </main>
</template>
<!-- github検証 -->
<style>
main {
  border: blue 1px solid;
  padding: 20px;
}
#breadcrumbs ul li {
  display: inline;
  list-style-type: none;
}
#breadcrumbs {
  margin-left: 0px;
}
#breadcrumbs ul {
  padding-left: 0px;
}
#breadcrumbs ul .current {
  color: red;
}
#breadcrumbs ul li::before {
  content: '>';
}

#breadcrumbs ul li:first-child::before {
  content: none;
}

</style>