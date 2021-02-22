# DNS

DNS Stands for Domain Name System

One of the most important and overlooked parts of the internet.

DNS Resolution: A URL is essentially an *alias* for an IP address

> there is a . at the end of the domain name that we never see. 

The end dot represents the root of the internet namespace

When typing a URL into a browser the OS and Browser look in the cache and the other registered domains to see if they already know the IP address... otherwise they ask a resolving name server

The resolving name server is either configured manually or automatically by the OS

The resolving name server may have the address in cache, but if it doesn't it will ask a root name server.

If the root name server doesn't have it it will ask TLD (top level domain) servers

The TLD name servers were reference the authorative name servers (Based on the domain registrar's notification to the registry) which using that info will give the IP to the resolving name server.

DNS was designed to work very fast and efficiently.

## Record Types

a small subet of types:

A: most common, maps hostnames to IP adress (IPv4, 32 bit address)
NS: Name Server that is responsible for a DNS zone
MX: Mail Exchange record specifies where email gets sent to
CNAME: Canonical NAme, an alias for another hostname
AAAA: similar to A but uses IPv6 (128-bit address)

## DNS Providers

Amazon Route 53
CloudFlare
Verisign
EasyDNS
Azure DNS

## Command Line Tool Dig

>When tracing is enabled, `dig` makes iterative queries to resolve the name being looked up. It will follow referrals from the root servers, showing the answer from each server that was used to resolve the lookup.

example code:

`dig +trace google.com`
