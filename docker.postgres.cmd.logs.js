// PowerShell 7.5.1
// PS C:\Users\Richard Essuman> docker pull postgres
// Using default tag: latest
// latest: Pulling from library/postgres
// 61320b01ae5e: Pulling fs layer
// 3db9b37be7c3: Pulling fs layer
// e9a82aed48d7: Pulling fs layer
// 7c852ebdd63e: Waiting
// 28708ff4e046: Pulling fs layer
// 6ce13d85dabe: Pull complete
// bd1fa28722bb: Pull complete
// 410cd7ec9a40: Pull complete
// 475b0e32b814: Pull complete
// e7aba16d6a5e: Pull complete

// What's next:
//     View a summary of image vulnerabilities and recommendations → docker scout quickview postgres
// PS C:\Users\Richard Essuman> docker run --name postgres-db -e POSTGRES_PASSWORD=lkkkfjfk -p 5432:5432 -d postgres^C
// PS C:\Users\Richard Essuman> docker run --name postgres-db -e POSTGRES_PASSWORD=lkkkfjfk" -p 5432:5432 -d postgres
// 79adc2306da148f0806bb30c850578397b9817934738af7200863bb2778ca8f6
// PS C:\Users\Richard Essuman> docker ps
// CONTAINER ID   IMAGE      COMMAND                  CREATED         STATUS         PORTS                    NAMES
// 79adc2306da1   postgres   "docker-entrypoint.s…"   9 minutes ago   Up 9 minutes   0.0.0.0:5432->5432/tcp   postgres-db
// PS C:\Users\Richard Essuman> docker inspect^C
// PS C:\Users\Richard Essuman> docker inspect 79adc2306da1
// [
//     {
//         "Id": "79adc2306da148f0806bb30c850578397b9817934738af7200863bb2778ca8f6",
//         "Created": "2025-05-27T09:13:52.97110548Z",
//         "Path": "docker-entrypoint.sh",
//         "Args": [
//             "postgres"
//         ],
//         "State": {
//             "Status": "running",
//             "Running": true,
//             "Paused": false,
//             "Restarting": false,
//             "OOMKilled": false,
//             "Dead": false,
//             "Pid": 713,
//             "ExitCode": 0,
//             "Error": "",
//             "StartedAt": "2025-05-27T09:13:53.415550486Z",
//             "FinishedAt": "0001-01-01T00:00:00Z"
//         },
//         "Image": "sha256:7fb32a7ac3a99e06ee5b81950278662ff78ea518a9fb18866bb8a02a215b78d1",
//         "ResolvConfPath": "/var/lib/docker/containers/79adc2306da148f0806bb30c850578397b9817934738af7200863bb2778ca8f6/resolv.conf",
//         "HostnamePath": "/var/lib/docker/containers/79adc2306da148f0806bb30c850578397b9817934738af7200863bb2778ca8f6/hostname",
//         "HostsPath": "/var/lib/docker/containers/79adc2306da148f0806bb30c850578397b9817934738af7200863bb2778ca8f6/hosts",
//         "LogPath": "/var/lib/docker/containers/79adc2306da148f0806bb30c850578397b9817934738af7200863bb2778ca8f6/79adc2306da148f0806bb30c850578397b9817934738af7200863bb2778ca8f6-json.log",
//         "Name": "/postgres-db",
//         "RestartCount": 0,
//         "Driver": "overlay2",
//         "Platform": "linux",
//         "MountLabel": "",
//         "ProcessLabel": "",
//         "AppArmorProfile": "",
//         "ExecIDs": null,
//         "HostConfig": {
//             "Binds": null,
//             "ContainerIDFile": "",
//             "LogConfig": {
//                 "Type": "json-file",
//                 "Config": {}
//             },
//             "NetworkMode": "bridge",
//             "PortBindings": {
//                 "5432/tcp": [
//                     {
//                         "HostIp": "",
//                         "HostPort": "5432"
//                     }
//                 ]
//             },
//             "RestartPolicy": {
//                 "Name": "no",
//                 "MaximumRetryCount": 0
//             },
//             "AutoRemove": false,
//             "VolumeDriver": "",
//             "VolumesFrom": null,
//             "ConsoleSize": [
//                 10,
//                 70
//             ],
//             "CapAdd": null,
//             "CapDrop": null,
//             "CgroupnsMode": "host",
//             "Dns": [],
//             "DnsOptions": [],
//             "DnsSearch": [],
//             "ExtraHosts": null,
//             "GroupAdd": null,
//             "IpcMode": "private",
//             "Cgroup": "",
//             "Links": null,
//             "OomScoreAdj": 0,
//             "PidMode": "",
//             "Privileged": false,
//             "PublishAllPorts": false,
//             "ReadonlyRootfs": false,
//             "SecurityOpt": null,
//             "UTSMode": "",
//             "UsernsMode": "",
//             "ShmSize": 67108864,
//             "Runtime": "runc",
//             "Isolation": "",
//             "CpuShares": 0,
//             "Memory": 0,
//             "NanoCpus": 0,
//             "CgroupParent": "",
//             "BlkioWeight": 0,
//             "BlkioWeightDevice": [],
//             "BlkioDeviceReadBps": [],
//             "BlkioDeviceWriteBps": [],
//             "BlkioDeviceReadIOps": [],
//             "BlkioDeviceWriteIOps": [],
//             "CpuPeriod": 0,
//             "CpuQuota": 0,
//             "CpuRealtimePeriod": 0,
//             "CpuRealtimeRuntime": 0,
//             "CpusetCpus": "",
//             "CpusetMems": "",
//             "Devices": [],
//             "DeviceCgroupRules": null,
//             "DeviceRequests": null,
//             "MemoryReservation": 0,
//             "MemorySwap": 0,
//             "MemorySwappiness": null,
//             "OomKillDisable": false,
//             "PidsLimit": null,
//             "Ulimits": [],
//             "CpuCount": 0,
//             "CpuPercent": 0,
//             "IOMaximumIOps": 0,
//             "IOMaximumBandwidth": 0,
//             "MaskedPaths": [
//                 "/proc/asound",
//                 "/proc/acpi",
//                 "/proc/interrupts",
//                 "/proc/kcore",
//                 "/proc/keys",
//                 "/proc/latency_stats",
//                 "/proc/timer_list",
//                 "/proc/timer_stats",
//                 "/proc/sched_debug",
//                 "/proc/scsi",
//                 "/sys/firmware",
//                 "/sys/devices/virtual/powercap"
//             ],
//             "ReadonlyPaths": [
//                 "/proc/bus",
//                 "/proc/fs",
//                 "/proc/irq",
//                 "/proc/sys",
//                 "/proc/sysrq-trigger"
//             ]
//         },
//         "GraphDriver": {
//             "Data": {
//                 "ID": "79adc2306da148f0806bb30c850578397b9817934738af7200863bb2778ca8f6",
//                 "LowerDir": "/var/lib/docker/overlay2/308dbabdecdf56c04c7855851106eaa51bcd431b8f82d60d64bc5e3c06e36010-init/diff:/var/lib/docker/overlay2/4c4f5396d4438d0514b1dedabf19d99f3ed5f633a1044d847037cee1ff5e4e9a/diff:/var/lib/docker/overlay2/5c879093ccee6b647ad807727ea56fd0349e24c07577b41964bb77ae5651c99f/diff:/var/lib/docker/overlay2/659b6cffc14d6f8e33cb9dbdcb926bc5de7081f753522ce755942aebbc3a96cd/diff:/var/lib/docker/overlay2/e532817001e98683ce765b2cbbe18bb88502977d5042e4d42d2a6490a0fb59c0/diff:/var/lib/docker/overlay2/c8672ab82bc0e9b5f2fc70169dba64051371bb121d1f52fa60838adc2755d3dc/diff:/var/lib/docker/overlay2/c5512c1ead510e36be60cdda1c300c0e78fc79568f8eddf31218b85147c6ad1a/diff:/var/lib/docker/overlay2/5445d17f0e41a10bf3763e6895fe4cad4d3d0881bea471485dc70dca9897f5d0/diff:/var/lib/docker/overlay2/7138449130cae28a52364237cee488db506626aaf9763cf54ce4fd1bccc5c02b/diff:/var/lib/docker/overlay2/9270e07bae52f6ee4c80a199afd67a7d6e6b4b90775b7730ce38f5ba999157db/diff:/var/lib/docker/overlay2/213fdb648199957a25414347c140f5ef9f430724ecdfccf59f854d630ec1c47a/diff:/var/lib/docker/overlay2/95e467d3dfe748e7340618f158da512b7434f1fef956f0bd3c71f385056ee52a/diff:/var/lib/docker/overlay2/e91db5ae0ec8f2674a448269bb60c91d4906d2fb84068790e818314be6107a3c/diff:/var/lib/docker/overlay2/002311ab2c46097d669b53bc7b9e27481828856c9dce45f7dfdafac83adb5df9/diff:/var/lib/docker/overlay2/3ae09a666f662dde32c8a678b79a68554ff815eb4a10d05509dc1cbd2d8164db/diff",
//                 "MergedDir": "/var/lib/docker/overlay2/308dbabdecdf56c04c7855851106eaa51bcd431b8f82d60d64bc5e3c06e36010/merged",
//                 "UpperDir": "/var/lib/docker/overlay2/308dbabdecdf56c04c7855851106eaa51bcd431b8f82d60d64bc5e3c06e36010/diff",
//                 "WorkDir": "/var/lib/docker/overlay2/308dbabdecdf56c04c7855851106eaa51bcd431b8f82d60d64bc5e3c06e36010/work"
//             },
//             "Name": "overlay2"
//         },
//         "Mounts": [
//             {
//                 "Type": "volume",
//                 "Name": "8ccf8b220ab19d0ade68b98cdfe93b28d0c7576f2d51e2dea382993161c49238",
//                 "Source": "/var/lib/docker/volumes/8ccf8b220ab19d0ade68b98cdfe93b28d0c7576f2d51e2dea382993161c49238/_data",
//                 "Destination": "/var/lib/postgresql/data",
//                 "Driver": "local",
//                 "Mode": "",
//                 "RW": true,
//                 "Propagation": ""
//             }
//         ],
//         "Config": {
//             "Hostname": "79adc2306da1",
//             "Domainname": "",
//             "User": "",
//             "AttachStdin": false,
//             "AttachStdout": false,
//             "AttachStderr": false,
//             "ExposedPorts": {
//                 "5432/tcp": {}
//             },
//             "Tty": false,
//             "OpenStdin": false,
//             "StdinOnce": false,
//             "Env": [
//                 "POSTGRES_PASSWORD=@R10581878e",
//                 "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/lib/postgresql/17/bin",
//                 "GOSU_VERSION=1.17",
//                 "LANG=en_US.utf8",
//                 "PG_MAJOR=17",
//                 "PG_VERSION=17.5-1.pgdg120+1",
//                 "PGDATA=/var/lib/postgresql/data"
//             ],
//             "Cmd": [
//                 "postgres"
//             ],
//             "Image": "postgres",
//             "Volumes": {
//                 "/var/lib/postgresql/data": {}
//             },
//             "WorkingDir": "",
//             "Entrypoint": [
//                 "docker-entrypoint.sh"
//             ],
//             "OnBuild": null,
//             "Labels": {},
//             "StopSignal": "SIGINT"
//         },
//         "NetworkSettings": {
//             "Bridge": "",
//             "SandboxID": "dad9104bd2e7687a86908d6959fcf5594db20e7e6df8a1534627fdf7eb90f17c",
//             "SandboxKey": "/var/run/docker/netns/dad9104bd2e7",
//             "Ports": {
//                 "5432/tcp": [
//                     {
//                         "HostIp": "0.0.0.0",
//                         "HostPort": "5432"
//                     }
//                 ]
//             },
//             "HairpinMode": false,
//             "LinkLocalIPv6Address": "",
//             "LinkLocalIPv6PrefixLen": 0,
//             "SecondaryIPAddresses": null,
//             "SecondaryIPv6Addresses": null,
//             "EndpointID": "8dcdb0ea4be85c021d02804974f7edcf31941b7953880b1642e1c9db83a3fd59",
//             "Gateway": "172.17.0.1",
//             "GlobalIPv6Address": "",
//             "GlobalIPv6PrefixLen": 0,
//             "IPAddress": "172.17.0.2",
//             "IPPrefixLen": 16,
//             "IPv6Gateway": "",
//             "MacAddress": "be:4e:c0:af:a2:48",
//             "Networks": {
//                 "bridge": {
//                     "IPAMConfig": null,
//                     "Links": null,
//                     "Aliases": null,
//                     "MacAddress": "be:4e:c0:af:a2:48",
//                     "DriverOpts": null,
//                     "GwPriority": 0,
//                     "NetworkID": "ea00f8efdf9df33892a893795f2fe339efbd8b295a413a0c99475814e2c94df5",
//                     "EndpointID": "8dcdb0ea4be85c021d02804974f7edcf31941b7953880b1642e1c9db83a3fd59",
//                     "Gateway": "172.17.0.1",
//                     "IPAddress": "172.17.0.2",
//                     "IPPrefixLen": 16,
//                     "IPv6Gateway": "",
//                     "GlobalIPv6Address": "",
//                     "GlobalIPv6PrefixLen": 0,
//                     "DNSNames": null
//                 }
//             }
//         }
//     }
// ]
// PS C:\Users\Richard Essuman> docker exec -it postgres-db psql -U postgres
// psql (17.5 (Debian 17.5-1.pgdg120+1))
// Type "help" for help.

// postgres=#
