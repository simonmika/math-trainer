importScripts('workbox-v3.4.1/workbox-sw.js')

/*
  This is our code to handle push events.
*/
self.addEventListener('push', (event) => {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Push Notification';
  const options = {
    body: `${event.data.text()}`,
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.workbox.precaching.precacheAndRoute([
  {
    "url": "api/index.json",
    "revision": "ece519587ba6740b3ba40a01eadd6b07"
  },
  {
    "url": "api/lessons/addition/10friends/index.json",
    "revision": "fa11e1acacd961f976d63f87d12b4c31"
  },
  {
    "url": "api/lessons/addition/index.json",
    "revision": "fedff8fc3ffa6aad51ca6f1f00fc5e2c"
  },
  {
    "url": "api/lessons/index.json",
    "revision": "2fda1633753a3c5aec07fcdfdfab412d"
  },
  {
    "url": "api/lessons/multiplication/index.json",
    "revision": "adca64a1a007e5023d24e1911f06f1d8"
  },
  {
    "url": "api/lessons/multiplication/only00/index.json",
    "revision": "66c3a2f36a2e7b35065389329cf95bf2"
  },
  {
    "url": "api/lessons/multiplication/only01/index.json",
    "revision": "1a16f520f2f8b52d418a3a6ca026012b"
  },
  {
    "url": "api/lessons/multiplication/only02/index.json",
    "revision": "a82415268f08cb3dcf545d2190753400"
  },
  {
    "url": "api/lessons/multiplication/only03/index.json",
    "revision": "36866a6a518fde926b78f370f242236c"
  },
  {
    "url": "api/lessons/multiplication/only04/index.json",
    "revision": "ed151674ac6ce92e571a81db7ba3fc16"
  },
  {
    "url": "api/lessons/multiplication/only05/index.json",
    "revision": "0991dce8b7007a00de7602c6c74753b8"
  },
  {
    "url": "api/lessons/multiplication/only06/index.json",
    "revision": "ee3cfaec057f3a573f7313a3ff9d8f77"
  },
  {
    "url": "api/lessons/multiplication/only07/index.json",
    "revision": "bda4315850c2fb3be6d8c12b35c325b2"
  },
  {
    "url": "api/lessons/multiplication/only08/index.json",
    "revision": "7d9b45a599157fe23a56552994755979"
  },
  {
    "url": "api/lessons/multiplication/only09/index.json",
    "revision": "0ff6af1ecaaeacab1891541a15e64fd8"
  },
  {
    "url": "api/lessons/multiplication/only10/index.json",
    "revision": "03ca6077904e1453d72894efbac8ffbd"
  },
  {
    "url": "api/lessons/multiplication/upto10/index.json",
    "revision": "92f1773c5147be5c7cf80115e7973872"
  },
  {
    "url": "build/app.css",
    "revision": "30962dada4a1c4eedb1ea75d3448b8c0"
  },
  {
    "url": "build/app.js",
    "revision": "56bb0f163b30d4b84d2004c95fa537d4"
  },
  {
    "url": "build/app/1drua0pg.entry.js",
    "revision": "d5daee0343c6bb9e287f957a8ea7f10b"
  },
  {
    "url": "build/app/1drua0pg.sc.entry.js",
    "revision": "d5daee0343c6bb9e287f957a8ea7f10b"
  },
  {
    "url": "build/app/9iz3i1sr.entry.js",
    "revision": "f62cf72354ab73114e7b5558c0c86045"
  },
  {
    "url": "build/app/9iz3i1sr.sc.entry.js",
    "revision": "f62cf72354ab73114e7b5558c0c86045"
  },
  {
    "url": "build/app/app.8ioo1hxq.js",
    "revision": "f083a8d61c6a9a22ff36367b22fedd6d"
  },
  {
    "url": "build/app/app.keqoxcdt.js",
    "revision": "91e40ec420d37f76930fb4503c6534cd"
  },
  {
    "url": "build/app/avqeljpd.entry.js",
    "revision": "6afa9efa524f76bdfd1f40a0c018e691"
  },
  {
    "url": "build/app/avqeljpd.sc.entry.js",
    "revision": "cadc10cded868d58fa3c9d63d5f841db"
  },
  {
    "url": "build/app/ay0l2yje.entry.js",
    "revision": "6b2d0bd9825e19429c118b4aa6b2eb6f"
  },
  {
    "url": "build/app/ay0l2yje.sc.entry.js",
    "revision": "07376c04a08725d31ab4b1da4a5f4fda"
  },
  {
    "url": "build/app/chunk-1004ea03.js",
    "revision": "f3db46c00d77d286fe836b2639d93e3a"
  },
  {
    "url": "build/app/chunk-496c6bc9.es5.js",
    "revision": "68c30a3441693178bc33d8eadd04c0a5"
  },
  {
    "url": "build/app/chunk-88f61838.js",
    "revision": "b5b1b59a530be309a8b3a222e51f1175"
  },
  {
    "url": "build/app/chunk-892e1642.js",
    "revision": "c0238d76e93f46879d0232004e074bf9"
  },
  {
    "url": "build/app/chunk-af80afde.es5.js",
    "revision": "7cbab6e2528e00d17051c226cdd737e3"
  },
  {
    "url": "build/app/chunk-b760673a.es5.js",
    "revision": "feb70c5178c89e12204508eb6b881e5f"
  },
  {
    "url": "build/app/chunk-f17883f5.es5.js",
    "revision": "606e39cca86b99b3c2676fdd234ae59a"
  },
  {
    "url": "build/app/chunk-f49656cd.js",
    "revision": "345ca36e95fae51f103a9226800a4ed2"
  },
  {
    "url": "build/app/dp391fot.entry.js",
    "revision": "769dfdd45a138609da37b53c06211b09"
  },
  {
    "url": "build/app/dp391fot.sc.entry.js",
    "revision": "81106e2547b95523626a5552d368c652"
  },
  {
    "url": "build/app/ecbjihvw.entry.js",
    "revision": "11c063221bf08a2a1dc60fc98ac1af57"
  },
  {
    "url": "build/app/ecbjihvw.sc.entry.js",
    "revision": "ff70131e587ab00a1215e48172a71218"
  },
  {
    "url": "build/app/fd0uqf26.entry.js",
    "revision": "15dd14a85dba85724193825fbb93c173"
  },
  {
    "url": "build/app/fd0uqf26.sc.entry.js",
    "revision": "15dd14a85dba85724193825fbb93c173"
  },
  {
    "url": "build/app/gesture.es5.js",
    "revision": "617716a6f10d9b808c3967e8a09b61cc"
  },
  {
    "url": "build/app/gesture.js",
    "revision": "7626d8f4c76795b9eb13fc8b2394ba73"
  },
  {
    "url": "build/app/hardware-back-button.es5.js",
    "revision": "a6f7e1595f5f8ffa8574c2574f1a7b69"
  },
  {
    "url": "build/app/hardware-back-button.js",
    "revision": "23dd14024cf4efa75a4b9263a47f9396"
  },
  {
    "url": "build/app/input-shims.es5.js",
    "revision": "89da9fbea40dbff0312284ae792a109c"
  },
  {
    "url": "build/app/input-shims.js",
    "revision": "2d6b2f67f7c249168ca56a5a960f094c"
  },
  {
    "url": "build/app/ios.transition.es5.js",
    "revision": "819ce49d15ff503868b5a81dcbc3bef0"
  },
  {
    "url": "build/app/ios.transition.js",
    "revision": "4660e7f64c3bc9f73b876af9e1f6c98d"
  },
  {
    "url": "build/app/ixlckbwj.entry.js",
    "revision": "8be5cb0a46f02770235e83539160c44b"
  },
  {
    "url": "build/app/ixlckbwj.sc.entry.js",
    "revision": "f629bf95abb795d3f66c0fd33fbf5cef"
  },
  {
    "url": "build/app/ma2kwelh.entry.js",
    "revision": "99ada4c1e94757715595b8f66bef2d19"
  },
  {
    "url": "build/app/ma2kwelh.sc.entry.js",
    "revision": "28b8f81dd11b85ea6b617c1d4c693f12"
  },
  {
    "url": "build/app/md.transition.es5.js",
    "revision": "a6482485d53ad3d6f48350b055e1e28a"
  },
  {
    "url": "build/app/md.transition.js",
    "revision": "d85579b8d831ecdcc37d188f1c0783f7"
  },
  {
    "url": "build/app/nu9pbhgw.entry.js",
    "revision": "9eef696e1196f050a64b0d47b984639c"
  },
  {
    "url": "build/app/nu9pbhgw.sc.entry.js",
    "revision": "92f29951c667b4948e0ef607cc4f2ac4"
  },
  {
    "url": "build/app/soxwbfrv.entry.js",
    "revision": "4a85f06df46f62f0f070cf42cf0e7ae0"
  },
  {
    "url": "build/app/soxwbfrv.sc.entry.js",
    "revision": "0c24a0232a96190ba5642c60ee5f1b5c"
  },
  {
    "url": "build/app/srjm5zsi.entry.js",
    "revision": "b2b24ce734a285bc17181477a52f2adc"
  },
  {
    "url": "build/app/srjm5zsi.sc.entry.js",
    "revision": "45166d3f8faff0e3b5445b80f6456cc6"
  },
  {
    "url": "build/app/status-tap.es5.js",
    "revision": "1678715ca22b4d5b907f3e31b36da4a5"
  },
  {
    "url": "build/app/status-tap.js",
    "revision": "4d3c2d99f88e8b8f0507550571d3309a"
  },
  {
    "url": "build/app/svg/index.js",
    "revision": "35b1701e9c9c1dacb8be33a8bace509b"
  },
  {
    "url": "build/app/t06zbpf0.entry.js",
    "revision": "b74eb36cf174be99c1c3aa1d68939439"
  },
  {
    "url": "build/app/t06zbpf0.sc.entry.js",
    "revision": "67a92ac890dfc0d9f1506089d15734be"
  },
  {
    "url": "build/app/tap-click.es5.js",
    "revision": "fc001c130d712145e7951e338d71aae4"
  },
  {
    "url": "build/app/tap-click.js",
    "revision": "01bd75ed2516b8b9d6667018c450e510"
  },
  {
    "url": "build/app/ttenpk2o.entry.js",
    "revision": "4d37a73cad8e8370e5663e1801c99608"
  },
  {
    "url": "build/app/ttenpk2o.sc.entry.js",
    "revision": "4d37a73cad8e8370e5663e1801c99608"
  },
  {
    "url": "build/app/uaitalsn.entry.js",
    "revision": "b8089300b4a7dc6af9562c1bed86fce2"
  },
  {
    "url": "build/app/uaitalsn.sc.entry.js",
    "revision": "2a569d6d75b2e407c275b0fd1efa0a78"
  },
  {
    "url": "build/app/v0lfiiyf.entry.js",
    "revision": "fefd0b1622187e3cb5cc85e09d5f19f0"
  },
  {
    "url": "build/app/v0lfiiyf.sc.entry.js",
    "revision": "57261f0e5433df0eea27543748dce7b4"
  },
  {
    "url": "build/app/zupo2dv8.entry.js",
    "revision": "66e3ced9dbfc020fbc9107346981c74f"
  },
  {
    "url": "build/app/zupo2dv8.sc.entry.js",
    "revision": "0c383cc32dc404623f036e85df47eb95"
  },
  {
    "url": "index.html",
    "revision": "24f6ce2ff74872646528de7bbe9868d4"
  },
  {
    "url": "manifest.json",
    "revision": "c6e1b0f5cd2208e7293c5ab469f6bc03"
  }
]);
