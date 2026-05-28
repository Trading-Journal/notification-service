'use strict';
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8093;
app.use(express.json());

// K8s health probes
app.get('/actuator/health',       (_, res) => res.json({ status: 'UP' }));
app.get('/actuator/health/live',  (_, res) => res.json({ status: 'UP' }));
app.get('/actuator/health/ready', (_, res) => res.json({ status: 'UP' }));

// Domain routes
app.post('/notifications', (req, res) => res.json({ status: 'ok', path: '/notifications' }));
app.get('/notifications/:userId', (req, res) => res.json({ status: 'ok', path: '/notifications/:userId' }));
app.put('/notifications/:id/read', (req, res) => res.json({ status: 'ok', path: '/notifications/:id/read' }));
app.get('/preferences/:userId', (req, res) => res.json({ status: 'ok', path: '/preferences/:userId' }));
app.put('/preferences/:userId', (req, res) => res.json({ status: 'ok', path: '/preferences/:userId' }));

app.listen(PORT, () => console.log('notification-service listening on port ' + PORT));
