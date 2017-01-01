<template lang="html">
  <div class="loading_pop">
    <div class="loading">
      <div class="loading_circle loading_active"></div>
      <div class="loading_logo"></div>
    </div>
    <p>{{ msg || '正在加载'}}</p>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: ['msg']
}
</script>

<style lang="css" scoped>
.loading_active {
    animation: loading 5s infinite linear;
    -webkit-animation: loading 5s infinite linear;
}
@keyframes loading {
    from {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
    }
    to {
        transform: rotate(1800deg);
        -webkit-transform: rotate(1800deg);
        -moz-transform: rotate(1800deg);
        -o-transform: rotate(1800deg);
    }
}
@-webkit-keyframes loading {
    from {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
    }
    to {
        transform: rotate(1800deg);
        -webkit-transform: rotate(1800deg);
        -o-transform: rotate(1800deg);
        -moz-transform: rotate(1800deg);
    }
}

.loading {
    transform: scale(.5);
    -webkit-transform: scale(.5);
    -moz-transform: scale(.5);
    -o-transform: scale(.5);
}
.loading_circle {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 24px;
    left: -36px;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MTE2MzE5NjNGNTUxMUU2ODYxQ0I3RkQyNjI5NzU2MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MTE2MzE5NzNGNTUxMUU2ODYxQ0I3RkQyNjI5NzU2MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkxMTYzMTk0M0Y1NTExRTY4NjFDQjdGRDI2Mjk3NTYzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkxMTYzMTk1M0Y1NTExRTY4NjFDQjdGRDI2Mjk3NTYzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+symMnAAAA/VJREFUeNrMmU1IVFEUx+9786Fl6URTkY1hJhWVophG1KYoUCPatMhFi4o2QYvaRYs+Fi2C9kGLoE0FLSpDQbJvyAZT0Az6oCS/iBJtaCadz/5H/49e46gzNj7fgT/3vefz3d879757zzmjtbS0qEzN5XI50NTH4/H9iUSiAirCuQet2+PxXMRxBApAw9Ag1AsNQIlM+3JmCLYJUOej0WgtYDwzPFO0CFoFbeb1n1A35Cd89gAB5gPYtUgkUotT8Z7SNG1Y13U/2hfQG1x6R4+FoRyoAFoBrYXWQ8ugXdAOqAN6AoX+G9DpdJ6Bxy7BY3k4jQPqJXQV1x+MjY3Fp/m3EDUEdcn7QD6oBtoCVbNtgt7OCRBec8Nr9wBXJ+eA6nE4HCfgxVe4rnB9YkJp6Y2U3NpHPZP5C5VAh6BigqZ8WX0auIJYLNYWjcUELgpvXQbUVoEz36epOdkP6CbUKM+GtkGHpdu0AMVzgGsFUKWuaUGcH4S3zqnsm8zbG1AQ2kBv6rMCAuw+VIWJH4Tn9sJrTWr+bMAEuZFDPz0ggE7De/tkHcNxA+Da1PybDPktrp0y3GUpAd1udyHgzsJzE3MOcI3KOuuHmnksXsybAohhvSJOxNfaiTl3QVlvsjZ+5gK/+x9AeK8UgDvhvd9YSk6phTNjuankQj8JiEX4OOAi8N7TcDjcvoCAMh97uFtVTwDm5ubqANwOwBAAr6daYS02P9tyWWrFg7KkuKB+AD5PvluzHlA+mBEoH1ojgBX03usZ9lYrTQbtE4+LBXA1ATuUfayPbaETcPkCCH2wEeB3tl44TncS8JuNAEfZLhG4hKx/6QSPFlqYbY7sHONYZhyQsqOJBwPQYobpUZtwudmOC+AoLyxFRha0CWAB2186txfFBMcuttLY+nQmNorZl12siO2gAH7hSenC7Gwq1e5ayuNenWF3gHlrkQ0AfWQRpgGde18X/1htA8AatsKU0E0hTozJtHcB4bxkiBlhlwEYYMitp8qsLLQ6MnQa9RtzVmfUSkoYclttlazhCMPjVGlniDmBkVn5LP4wjJFrNscFyYm7FHLaWYZosGg+etmXi9WG7tlqM/IG75mbHpWgcR7hCtlHHvtsSqd4JF/QXeijCbJqHuDkmcfYxwf2GUurusUyxG3TcB+AjmRpyL18ljzTyT7usM+p4dYMD5K3eagm68v1/MJOMm/1M/vKJIgsUn8LmDo/hObkOZcJoPnDkZLEHi4FZdQIs6+vjIikBj1uRMIMmbwMQkq5fRkv3s6lZNYoXvP7/ZkMTz69UM7jTCzA7Sv7RfSkTh5BrZJUQ+skbYWWE9htyimMnyGGGDHN6WeIPwIMAMkTSlorSEZwAAAAAElFTkSuQmCC");
}
.loading_logo {
    position: absolute;
    width: 16px;
    height: 16px;
    top: 36px;
    left: -24px;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4Rjk5NzcxMzNGNTUxMUU2QUFCM0EwMTIwOEUwQzFEQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4Rjk5NzcxNDNGNTUxMUU2QUFCM0EwMTIwOEUwQzFEQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhGOTk3NzExM0Y1NTExRTZBQUIzQTAxMjA4RTBDMURBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhGOTk3NzEyM0Y1NTExRTZBQUIzQTAxMjA4RTBDMURBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GU0vYwAAAVRJREFUeNqc0z8oxGEcx/Hf8TvDKYVkEImEhUWJMiiDxSDJn6QMBqNkYcBisJj8HWWySzcdm34xOUkYiEUkCkn+vL/1eeq6rt8533p1d7/r+dz3+T7PRYIg8FT1WEA33rGHSTx7IZWn1yYcYwBx9MDHqpelfL32ohAXGMMbZnCeLcB18IgTdGqxVRUeQtaWIOY6KMYg7vQ5og52QgKKrFsXsIgvvc/X3uswHNJ5A/pcgFtchm1UoAsvGRaXohajaPRTvmhVy1fowJOeR1GJarShQFsdwqsb4ggOkMQUppHAte6EhS7p1CxsXesufZ35Fk6VfJRyOlafOl4b9HzaduIWMKep2/7HM+w5qoGl1wfW7Jea9aDcy6027Sgt4NbLvW7QgjMLWPlHgHU7a/OxgGVN9eePi5O68gn3Z7JLNIEN9KMdNbowMdzrGA+xi318u7RfAQYAWx5EPl7vDJsAAAAASUVORK5CYII=");
}
.loading_pop {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    margin: 0;
    padding: 0 16px;
    height: 43px;
    border-radius: 4px;
    background: rgba(0,0,0,.65);
    color: #fff;
    line-height: 45px;
    font-size: 14px;
}
.loading_pop p {
    margin: 0 0 0 30px;
}
</style>
