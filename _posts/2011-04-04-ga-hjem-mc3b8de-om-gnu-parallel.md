---
id: 800
title: 'Gå-hjem-møde om GNU Parallel'
date: '2011-04-04T16:24:14+02:00'
author: Flemming
layout: post
guid: 'http://osaa.dk/?p=800'
permalink: /index.php/2011/04/ga-hjem-m%c3%b8de-om-gnu-parallel/
categories:
    - '1'
---

OSAA og PROSA inviterer til gå-hjem-møde om GNU Parallel hos OSAA d. 12/4 kl 17:00.

PROSA inviterer på en sandwich, og derfor er tilmelding nødvendig via:

<http://www.doodle.com/zh2rxfrcekv987x7>

Hvis du dagligt bruger kommandolinjen i UNIX vil du med stor  
sandsynligvis kunne have glæde af GNU Parallel.

GNU Parallel er et UNIX shell-værktøj til udførelse af jobs parallelt  
ved hjælp af en eller flere computere. Et job er kan være en enkelt  
kommando eller et lille script, der skal køre for hver linje i input.  
Det typiske input er et liste over filer, et liste af computere, en  
liste over brugere, et liste med webadresser eller et liste af  
tabeller. Et job kan også være et kommando, der læser fra en pipe. GNU  
Parallel kan derefter opdele input og pipe det ind i kommandoer  
parallelt.

Hvis du bruger xargs og tee i dag vil du finde GNU Parallel meget nem  
at bruge da GNU Parallel er skrevet så den har de samme options som  
xargs. Hvis du skriver løkker i shell, vil du se, at GNU Parallel kan  
erstatte de fleste løkker og få dem til at køre hurtigere ved at køre  
flere jobs parallelt.

GNU Parallel sikrer output fra kommandoerne er samme output som du  
ville få hvis du havde kørt kommandoerne sekventielt. Dette gør det  
muligt at bruge output fra GNU Parallel som input til andre  
programmer.

For hver linje af input udfører GNU Parallel en kommando med den linje  
som argumenter. Hvis der ikke er nogen kommando givet, udføres linjen  
som kommando. Flere linjer vil blive kørt parallelt. GNU Parallel kan  
ofte bruges som erstatning for xargs eller cat | bash.

Om taler:

Ole Tange er udvikleren bag GNU Parallel. Han har arbejdet som  
Hostmaster for .dk, som sikkerhedskonsulent, som  
netværksadministrator, som site reliablility engineer, som udvikler og  
arbejder nu som bioinformatiker på Københavns Universitet. Han har  
arbejdet med UNIX siden 1991 (på Daimi), GNU/Linux siden 1992, og i  
1996 slettede han sin Microsoft Windows partition. Hans telefon har  
kørt fri software siden 2008.

Han er aktiv inden for fri software og IT-politik, men måske bedst  
kendt for <http://ole.tange.dk/swpat> (The Patented Webshop)  
– en illustration af software-patenter i en typisk webshop.

PROSA inviterer på en sandwich, og derfor er tilmelding nødvendig og  
skal ske via denne doodle:

<http://www.doodle.com/zh2rxfrcekv987x7>